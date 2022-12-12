// type MyExclude<T, U> = any
// 처음으로 스스로 맞춘 문제....^^....!

/**
 * Exclude<T, U> : T에서 U에 할당할 수 있는 타입을 제외하는 내장 제네릭
 * U에서 T가 extends되면 제외해야하나끼 never를 반환, 그외는 반환
 */
type MyExclude<T, U> = T extends U ? never : T
