{
  // Conditional Type
  type Check<T> = T extends string? boolean : number;
  type T1 = Check<string>; // boolean
  type T2 = Check<'hello'>; // boolean
  type T3 = Check<1>; // number

  type TypeName<T> = T extends string
    ? 'string'
    : T extends number
    ? 'number'
    : T extends boolean
    ? 'boolean'
    : T extends undefined
    ? 'undefined'
    : T extends Function
    ? 'function'
    : 'object';

  type T4 = TypeName<string>;
  type T5 = TypeName<'a'>;
  type T6 = TypeName<() => {}>;
}