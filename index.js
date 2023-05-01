exports.decorateConfig = (config) => {
    return Object.assign({}, config, {
      backgroundColor: '#2B2A3D',
      foregroundColor: '#A6E3E9',
      borderColor: '#8755B4',
      cursorColor: '#FF9AD6',
      colors: {
        black: '#2B2A3D',
        red: '#FF9AD6',
        green: '#A6E3E9',
        yellow: '#FFCB6B',
        blue: '#B8F7D4',
        magenta: '#C3AED6',
        cyan: '#A6E3E9',
        white: '#F8F8F2',
        lightBlack: '#4F4F4F',
        lightRed: '#FF9AD6',
        lightGreen: '#A6E3E9',
        lightYellow: '#FFCB6B',
        lightBlue: '#B8F7D4',
        lightMagenta: '#C3AED6',
        lightCyan: '#A6E3E9',
        lightWhite: '#FFFFFF',
      },
    });
  };
  