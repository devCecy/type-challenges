// type TupleToObject<T extends readonly any[]> = any

/**
 * @kennysliding 풀이
 * we will first check the types in T to see if its either string/number/symbol, by using the built-in type PropertyKey, then we can use that to the interface and loop over the types in T by using T[number], and assign that to P
 * (built-in type) type PropertyKey = string | number | symbol
 */
type TupleToObject<T extends readonly PropertyKey[]> = {
	[P in T[number]]: P
}
