// type MyReadonly2<T, K> = any

/**
 * = keyof T => 기본값
 * readonly [k in K]: T[k] => 읽기전용인 타입
 * &
 * Omit<T, K> => 읽기전용이 아닌 타입을 반환
 */
type MyReadonly2<T, K extends keyof T = keyof T> = {
	readonly [k in K]: T[k]
} & Omit<T, K>
