// type MyReturnType<T> = any

/**
 * T 가 확장되는 곳은 예시 T의 타입이라고 생각하자.
 * 스스로 풀었음 !
 */
type MyReturnType<T extends (...arg: any[]) => any> = T extends (
	...arg: any[]
) => infer P
	? P
	: never
