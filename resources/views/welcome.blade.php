<x-app-layout :title="config('app.name')" layout="welcome">
    <x-slot name="head">
        <x-social-meta :title="config('site.title')"
            :description="config('site.description')" 
            image="https://pestphp.com/assets/img/og.jpg">
        </x-social-meta>
    </x-slot>
    <section>
        <x-welcome.intro></x-welcome.intro>

        <x-welcome.features></x-welcome.features>

        <x-welcome.testimonials></x-welcome.testimonials>

        <x-welcome.faq

        <div class="bg-white mb-12">
            <x-welcome.newsletter></x-welcome.newsletter>

            <div class="mt-8">
                <p class="text-center text-base leading-6 text-cool-gray-400">
                    © 2020 Pest
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
