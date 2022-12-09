// type MyPick<T, K> = any

/**
 * 1번 답변
 */
type MyPick<T, K extends keyof T> = {
	[P in K]: T[P]
}
