export type Constructor<T = object> = new (...args: never[]) => T;
export type AbstractConstructor<T = object> = new (...args: never[]) => T;

export function isConstructor(obj: object): obj is Constructor {
	return isAbstractConstructor(obj) && "new" in obj;
}

export function isAbstractConstructor(obj: object): obj is AbstractConstructor {
	return "constructor" in obj;
}
