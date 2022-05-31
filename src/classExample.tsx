class Constructor {
  field: number = 123;
  private privateField: number = 123;

  constructor(arg: number) {
    this.field = arg;
  }
  public publicMethod() {
    return this.field;
  }
  protected protectedMethod() {
    return (this.field += 10);
  }
  private privateMethod() {
    return (this.field += 30);
  }
}

// const instance = new Constructor();

class Child extends Constructor {
  public childMethod() {}
}

abstract class AbstractClass {
  public abstract abstractField: number;

  public abstract abstractMethod(): number;

  protected protectedMethod() {
    return this.abstractField;
  }
}

class NewChild extends AbstractClass {
  public abstractField: number = 123;

  public abstractMethod(): number {
    return this.protectedMethod();
  }
}

interface MyInterface<T> {
  field: string;
  method(): string;
}

class NewClass<T> implements MyInterface<T> {
  field: string = "123";
  public conf?: T;
  method(): string {
    throw new Error("Method not implemented.");
  }
}

// class MyComponet extends React.Component<
//   { prop1: number },
//   { state1: string }
// > {}
