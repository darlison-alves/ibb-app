export class ArrayUtis {
    public static removeItem<T>(origin: Array<T>, item: T): Array<T> {
        const oldArray = origin;
        let index = oldArray.indexOf(item);
        if (index > -1) {
            oldArray.splice(index, 1);
        }
        return oldArray;
    }
}