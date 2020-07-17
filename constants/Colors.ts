const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export default {
  light: {
    text: '#000',
    muted: 'rgba(0, 0, 0, 0.5)',
    border: 'rgba(0, 0, 0, 0.25)',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    muted: 'rgba(255, 255, 255, 0.6)',
    border: 'rgba(255, 255, 255, 0.25)',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
