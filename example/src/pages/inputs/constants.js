export const headers = [
  {
    name: 'Prop',
    width: '150px',
    uuid: 1,
  },
  {
    name: 'Type',
    width: '100px',
    uuid: 2,
  },
  {
    name: 'Default',
    width: '200px',
    flex_grow: 1,
    uuid: 3,
  },
  {
    name: 'Options',
    width: '200px',
    flex_grow: 1,
    uuid: 4,
  },
  {
    name: 'Description',
    width: '300px',
    uuid: 5,
  },
];

export const input_rows = [
  {
    name: 'onChange',
    type: 'function',
    default: '(value) => {}',
    options: '',
    description: 'onChange function',
    uuid: 1,
  },
  {
    name: 'onFocus',
    type: 'function',
    default: '() => {}',
    options: '',
    description: 'onChange function',
    uuid: 2,
  },
  {
    name: 'onBlur',
    type: 'function',
    default: '() => {}',
    options: '',
    description: 'onBlur function',
    uuid: 3,
  },
  {
    name: 'left_icon',
    type: 'fontawesome',
    default: 'null',
    options: '',
    description: 'optional fontawesome left icon',
    uuid: 4,
  },
  {
    name: 'right_icon',
    type: 'fontawesome',
    default: 'null',
    options: '',
    description: 'optional fontawesome right icon',
    uuid: 5,
  },
  {
    name: 'default_value',
    type: 'string',
    default: 'null',
    options: '',
    description: 'default value for uncontrolled component',
    uuid: 6,
  },
  {
    name: 'value',
    type: 'string',
    default: 'null',
    options: '',
    description: 'value for controlled component',
    uuid: 7,
  },
  {
    name: 'debounce',
    type: 'number',
    default: 'null',
    options: '',
    description: 'debounce before firing the onChange function',
    uuid: 8,
  },
  {
    name: 'type',
    type: 'string',
    default: 'null',
    options: '',
    description: 'html tag attribute',
    uuid: 9,
  },
  {
    name: 'name',
    type: 'string',
    default: 'null',
    options: '',
    description: 'html tag attribute',
    uuid: 10,
  },
  {
    name: 'margin',
    type: 'string | number',
    default: '0px',
    options: '',
    description: 'adds margin',
    uuid: 11,
  },
  {
    name: 'width',
    type: 'number | string',
    default: '100%',
    options: '',
    description: 'sets width',
    uuid: 12,
  },
  {
    name: 'label',
    type: 'string',
    default: 'null',
    options: '',
    description: 'adds a label above the input',
    uuid: 13,
  },
  {
    name: 'transparent',
    type: 'boolean',
    default: 'false',
    options: '',
    description: 'removes the label, background, and borders from the input',
    uuid: 14,
  },
  {
    name: 'theme',
    type: 'object',
    default: '{}',
    options: 'refer to theme',
    description: 'theme override',
    uuid: 15,
  },
  {
    name: 'background',
    type: 'string',
    default: 'null',
    options: '',
    description: 'sets background',
    uuid: 16,
  },
  {
    name: 'height',
    type: 'number',
    default: '30',
    options: '',
    description: 'sets height',
    uuid: 17,
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    options: '',
    description: 'disables the input',
    uuid: 18,
  },
  {
    name: 'placeholder',
    type: 'string',
    default: '',
    options: '',
    description: 'placeholder for the input',
    uuid: 19,
  },
  {
    name: 'text_align',
    type: 'string',
    default: 'left',
    options: '',
    description: 'sets text-align for the input',
    uuid: 20,
  },
  {
    name: 'error_level',
    type: 'number',
    default: 'null',
    options: '1 | 2 | 3',
    description: 'changes the right icon and right icon color',
    uuid: 21,
  },
  {
    name: 'error_message',
    type: 'string',
    default: 'required',
    options: '',
    description: 'error message for the tooltip',
    uuid: 22,
  },
  {
    name: 'controlled',
    type: 'boolean',
    default: 'true',
    options: '',
    description: 'allows the dropdown to be controlled by the value prop',
    uuid: 22,
  },
];
