// type First<T extends any[]> = any

/**
 * any[]대신 unknown[]사용 : (effective-typescript chapter5-item46) 어떤값이 존재하나 그 타입을 모르는 경우 any보다 unknown사용
 * T가 빈배열 []에서 확장되면 무엇도 반환하지 않는다(never), 그외는 배열의 첫번째 원소를 반환한다.
 */
type First<T extends unknown[]> = T extends [] ? never : T[0]
