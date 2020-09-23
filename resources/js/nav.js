import queryFirstTabbable from 'ally.js/src/query/first-tabbable'
import maintainTabFocus from 'ally.js/src/maintain/tab-focus'
import whenVisibleArea from 'ally.js/src/when/visible-area'

window.AppOffCanvasMenu = () => {
    return {
        isOpen: false,
        lastActiveElement: null,
        trapFocus: null,
        /*
         * This open's the dialog
         *
        */
        toggle() {
            if (!this.isOpen) {
                this.open()
            }
            else {
                this.close()
            }
        },
        open() {
            // Checks if [x-ref="dialog"] exists
            if (!this.$refs.dialog) return

            // Gets the focused element before dialog opens
            this.lastActiveElement = document.activeElement

            // Adds .overflow-hidden class to body to prevent scrolling out of dialog
            document.body.classList.add('overflow-hidden')
            document.body.classList.add('lg:overflow-visible')

            // Opens the dialog
            this.isOpen = true

            // Run's after Alpine's magic things
            this.$nextTick(() => {

                // Traps focus to [x-ref="dialog"]
                this.trapFocus = maintainTabFocus({
                    context: this.$refs.dialog,
                })

                // Wait's until find visible items in dialog
                whenVisibleArea({
                    context: this.$refs.dialog,
                    // Finds the first tabbable element
                    callback: function(element) {
                        let target = queryFirstTabbable({
                            context: element,
                            defaultToContext: true,
                            strategy: 'quick'
                        })
                        // And set's to the first focused element
                        if (target) target.focus()
                    },
                })
            })
        },
        close() {
            document.body.classList.remove('overflow-hidden')
            this.isOpen = false
            this.$nextTick(() => {
                this.trapFocus.disengage()
                if (this.lastActiveElement) this.lastActiveElement.focus()
            })
        }
    }
}

// Activates current url in Docs Navigation
var current = document.querySelector('.docs-nav ul a[href="' + window.location.pathname + '"]');

if (current) {
    current.parentNode.classList.add('active');
}