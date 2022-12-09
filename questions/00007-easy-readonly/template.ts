// type MyReadonly<T> = any

/**
 * 내 답변
 */
type MyReadonly<T> = {
	readonly [K in keyof T]: T[K]
}
