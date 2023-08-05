/*Partial<T> 可以将类型 T 的所有属性变为可选的，
即将所有属性都转换为 T 或 undefined。实现 Partial 的基本思路是使用映射类型。
*/
// Partial 的实现：
type Partial<T> = {
  [P in keyof T]?: T[P];
};

// Omit<T, K> 可以将类型 T 的某些属性移除掉，即将某些属性变为 never。实现 Omit 的基本思路是使用映射类型。
// Omit 的实现：
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
// Exclude<T, U> 可以将 T 中属于 U 的属性移除掉，即将 T 中的某些属性变为 never。
// Pick<T, K extends keyof T> 可以将类型 T 的某些属性挑选出来，即将 T 中的某些属性变为必选。
// keyof T 可以获取类型 T 的所有属性名，即 T 的所有属性名组成联合类型。
// any 是 TypeScript 中的顶级类型，它可以表示任何类型。

type PartialPerson = Partial<Person>; // { name?: string; age?: number; email?: string; }

type PersonWithoutEmail = Omit<Person, 'email'>; // { name: string; age: number; }
