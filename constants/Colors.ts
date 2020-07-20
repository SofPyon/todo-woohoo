const tintColorLight = '#1879f4';
const tintColorDark = '#fff';

export default {
  light: {
    text: '#000',
    muted: 'rgba(0, 0, 0, 0.5)',
    border: 'rgba(0, 0, 0, 0.25)',
    background: '#fff',
    panel: 'rgba(0, 0, 0, 0.05)',
    panelActive: 'rgba(0, 0, 0, 0.1)',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    muted: 'rgba(255, 255, 255, 0.6)',
    border: 'rgba(255, 255, 255, 0.25)',
    background: '#000',
    panel: 'rgba(255, 255, 255, 0.1)',
    panelActive: 'rgba(255, 255, 255, 0.2)',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
