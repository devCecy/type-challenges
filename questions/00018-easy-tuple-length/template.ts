// type Length<T> = any

/**
 * readonly는 test case 배열에 as const가 있기 때문에 필요한것인가?
 * 타입의 길이 구하기 :  T.length 아니고 T['length']
 */
type Length<T extends readonly any[]> = T["length"]
