<x-app-layout layout="welcome">
    <section>
        @include('_partials.welcome.intro')

        @include('_partials.welcome.features')

        @include('_partials.welcome.testimonials')

        @include('_partials.welcome.faq')

        <div class="bg-white mb-12">
            @include('_partials.welcome.newsletter')

            <div class="mt-8">
                <p class="text-center text-base leading-6 text-gray-400">
                    © {{ now()->year }} {{ config('site.name') }}
                </p>
            </div>
        </div>
        <script src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js" type="text/javascript">
        </script>
        <script type="text/javascript">
            (function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';}(jQuery));var $mcj = jQuery.noConflict(true);
        </script>
    </section>
</x-app-layout>
