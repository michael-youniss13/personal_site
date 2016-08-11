import keyMirror from 'keyMirror';

export const Colors = {
  PRIMARY_COLOR: 'rgb(67,151,180)',
  PRIMARY_COLOR_LIGHT:'rgba(67,151,180,.6)',
  SECONDARY_COLOR: 'rgb(56,88,205)',
  TEXT_COLOR: 'rgb(60,64,78)',
  ACCENT_COLOR: 'rgb(231,100,63)',
  HIGHLIGHT_COLOR: 'rgb(189,144,118)',
  WHITE: 'rgb(255,255,255)'
};


export const Views = keyMirror({
  ABOUT_ME_VIEW: null,
  PROJECTS_VIEW: null,
  CONTACT_VIEW: null,
  RESUME_VIEW: null
})
