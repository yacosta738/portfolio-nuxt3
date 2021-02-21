import {Component, Vue} from 'vue-property-decorator';

@Component
export default class ConfigurationMixin extends Vue {
    // Sets target="_blank" rel="noopener noreferrer" on external links
    handleExternalLinks() {
        const allLinks = Array.from(document.querySelectorAll('a'));
        if (allLinks.length > 0) {
            allLinks.forEach(link => {
                if (link.host !== window.location.host) {
                    link.setAttribute('rel', 'noopener noreferrer');
                    link.setAttribute('target', '_blank');
                }
            });
        }
    };

    mounted(): void {
        this.handleExternalLinks();
    }
}
