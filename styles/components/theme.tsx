import { ITheme} from '../../interface/styled'

export const baseTheme:ITheme = {
    colors:{
      primary: "#498bf7",
      secondary:"#01631a",
      success:"#000",
      danger:"#313131",
      grey:"#8a8a8a",
      bg:"#000",
      font:"#000"
    },
    media:{
      extraLarge:'(max-width:1140px)',
      large:'(max-width:1060px)',
      medium:'(max-width:800px)',
      small:'(max-width:540px)',
      mobile:'(max-width:320px)',
    },
    sizes: {
      header: { height: 56 },
      container: { width: 1200 },
      footer: { height: 128 },
      modal: { width: 540 },
    },
    durations: {
      ms300: 300,
    },
    order: {
      header: 50,
      modal: 100,
    },
    paddings:{
      block:40,
      element:10
    }

};