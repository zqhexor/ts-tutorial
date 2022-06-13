type MyEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false


type TestMyEqual = MyEqual<string, string>
