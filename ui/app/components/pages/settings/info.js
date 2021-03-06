const {Component} = require('react');
const PropTypes = require('prop-types');
const h = require('react-hyperscript');

class Info extends Component {
  constructor(props) {
    super(props);

    this.state = {
      version: global.platform.getVersion(),
    };
  }

  static renderLogo() {
    return (
      h('div.settings__info-logo-wrapper', [
        h('img.settings__info-logo', {src: 'images/info-logo.png'}),
      ])
    );
  }

  renderInfoLinks() {
    return (
      h('div.settings__content-item.settings__content-item--without-height', [
        h('div.settings__info-link-header', this.context.t('links')),
        h('div.settings__info-link-item', [
          h('a', {
            href: 'https://irmeta.io/privacy.html',
            target: '_blank',
          }, [
            h('span.settings__info-link', this.context.t('privacyMsg')),
          ]),
        ]),
        h('div.settings__info-link-item', [
          h('a', {
            href: 'https://irmeta.io/terms.html',
            target: '_blank',
          }, [
            h('span.settings__info-link', this.context.t('terms')),
          ]),
        ]),
        h('div.settings__info-link-item', [
          h('a', {
            href: 'https://irmeta.io/attributions.html',
            target: '_blank',
          }, [
            h('span.settings__info-link', this.context.t('attributions')),
          ]),
        ]),
        h('hr.settings__info-separator'),
        h('div.settings__info-link-item', [
          h('a', {
            href: 'https://support.irmeta.io',
            target: '_blank',
          }, [
            h('span.settings__info-link', this.context.t('supportCenter')),
          ]),
        ]),
        h('div.settings__info-link-item', [
          h('a', {
            href: 'https://irmeta.io/',
            target: '_blank',
          }, [
            h('span.settings__info-link', this.context.t('visitWebSite')),
          ]),
        ]),
        h('div.settings__info-link-item', [
          h('a', {
            href: 'mailto:contact@irchain.io?subject=Feedback',
          }, [
            h('span.settings__info-link', this.context.t('emailUs')),
          ]),
        ]),
      ])
    );
  }

  render() {
    return (
      h('div.settings__content', [
        h('div.settings__content-row', [
          h('div.settings__content-item.settings__content-item--without-height', [
            Info.renderLogo(),
            h('div.settings__info-item', [
              h('div.settings__info-version-header', 'IrMeta Version'),
              h('div.settings__info-version-number', this.state.version),
            ]),
            h('div.settings__info-item', [
              h(
                'div.settings__info-about',
                this.context.t('builtByIrChainTeam'),
              ),
            ]),
          ]),
          this.renderInfoLinks(),
        ]),
      ])
    );
  }
}

Info.propTypes = {
  tab: PropTypes.string,
  irmeta: PropTypes.object,
  setCurrentCurrency: PropTypes.func,
  setRpcTarget: PropTypes.func,
  displayWarning: PropTypes.func,
  revealSeedConfirmation: PropTypes.func,
  warning: PropTypes.string,
  location: PropTypes.object,
  history: PropTypes.object,
  t: PropTypes.func,
};

Info.contextTypes = {
  t: PropTypes.func,
};

module.exports = Info;
