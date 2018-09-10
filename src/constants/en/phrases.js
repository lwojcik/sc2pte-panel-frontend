module.exports = {
  en: {
    config: {
      loading: 'Loading extension data...',
      fields: {
        server: {
          label: 'Server',
          choose: 'Choose a server',
          eu: 'EU - Europe',
          us: 'US - Americas & Oceania',
          kr: 'KR - Korea',
        },
        playerid: {
          label: 'Player ID',
        },
        region: {
          label: 'Region',
        },
        name: {
          label: 'Name',
        },
        profileUrl: {
          label: 'Battle.net profile URL',
        },
        submit: {
          label: 'Save',
        },
      },
      validation: {
        fieldCannotBeEmpty: 'Field cannot be empty',
        selectServer: 'Select server',
      },
      manual: {
        button: {
          label: 'Instructions - click to view ↓',
        },
        content: {},
      },
      messages: {
        config_get_no_config_found_warning: 'No StarCraft II profile found. Fill the form below to make the extension work.',
        config_get_error: 'Ooops, an error occured while getting config data. Please refresh the page and try again.',
        config_get_inprogress: 'Loading your configuration. Please wait...',
        config_get_success: 'Extension configured successfully! Want to showcase a different StarCraft II profile? Fill the form below.',
        config_save_success: 'Your configuration has been saved successfully! Go to your channel page and add the extension to your panels.',
        config_save_inprogress: 'Saving your configuration. Please wait...',
        config_save_error: 'Erro while saving configuration. Please refresh the page and try again.',
      },
    },
  },
};
