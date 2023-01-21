// type MyOmit<T, K> = any

/**
 * T에서 K 프로퍼티만 제거해 새로운 오브젝트 타입을 만드는 내장 제네릭 Omit<T, K>를 이를 사용하지 않고 구현하세요.
 * Pick<T,K>과 Omit<T,K>은 반대의 역할을 한다.
 */
type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

/**
 * 다른 풀이
 * as P extends K 부분이 잘 이해가 되지 않음 !
 */
// type MyOmit<T, K extends keyof T> = {
// 	[P in keyof T as P extends K ? never : P]: T[P]
// }
