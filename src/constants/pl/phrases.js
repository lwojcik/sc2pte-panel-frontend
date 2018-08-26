module.exports = {
  pl: {
    config: {
      loading: 'Loading extension data...',
      fields: {
        server: {
          label: 'Serwer',
          choose: 'Choose a server',
          eu: 'EU - Europe',
          us: 'US - North America',
          kr: 'KR - South Korea',
        },
        playerid: {
          label: 'Id',
        },
        region: {
          label: 'Region',
        },
        name: {
          label: 'Name',
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
        content: {
          step: 'Under construction',
        },
      },
      messages: {
        config_get_no_config_found_warning: 'No StarCraft II profile found. Fill the form below to make the extension work.',
        config_get_error: 'Something wrong happened. Try to refresh the page maybe?',
        config_get_inprogress: 'Loading extension config. Please wait...',
        config_get_success: 'Jacked up and ready to go! Want to display a different StarCraft II profile? Use the form below to replace it.',
        config_save_success: 'Player config saved successfully',
        config_save_inprogress: 'Saving player configuration data. Please wait...',
        config_save_error: 'Failed saving player config',
      },
    },
  },
};
