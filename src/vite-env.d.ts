/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare interface BoxIconAttributes {
  name: string
  type?: 'solid' | 'logo'
  color?: string
  style?: React.CSSProperties
  class?: string
}

declare namespace JSX {
  interface IntrinsicElements {
    'box-icon': BoxIconAttributes
  }
}
