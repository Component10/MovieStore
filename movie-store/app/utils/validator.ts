export class Validator  {

  constructor() {}

  isEmpty(value: string): boolean {
      if (value.length < 0) {
        return false;
      }

      return true;
  };

  passwordGreaterThenSix(pass: string): boolean {
    if (pass.length < 6) {
      return false;
    }

    return true;
  }
};
