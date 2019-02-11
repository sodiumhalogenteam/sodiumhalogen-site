// Mixins

export const transitionAll = () => `transition: all 0.35s;`

export const backgroundCover = () => `background-size: cover;`

export const buttonVariant = (Vcolor, Vbackground, Vborder) => `

color: ${Vcolor};
background-color: ${Vbackground};
border-color: ${Vborder};
.transition-all;

&:hover,
&:focus,
&.focus,
&:active,
&.active,
.open > .dropdown-toggle& {
    color: ${Vcolor};
    background-color: darken(${Vbackground}, 5%);
    border-color: darken(${Vborder}, 7%);
}
&:active,
&.active,
.open > .dropdown-toggle& {
    background-image: none;
}
&.disabled,
&[disabled],
fieldset[disabled] & {
    &,
    &:hover,
    &:focus,
    &.focus,
    &:active,
    &.active {
        background-color: ${Vbackground};
        border-color: ${Vborder};
    }
}

.badge {
    color: ${Vbackground};
    background-color: @color;
}
`

export const sansSerifFont = () =>
  `font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;`

export const serifFont = () =>
  `font-family: 'Merriweather', 'Helvetica Neue', Arial, sans-serif;`
