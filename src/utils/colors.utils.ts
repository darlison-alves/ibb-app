export const StatusColorPayament = (status: string = "") => {
    switch(status) {
        case 'DEVOLVIDO': 
            return {
                class: "bg-red-200 text-red-600"
            }

        default: 
            return {
                class: "bg-purple-200 text-purple-600"
            }
    }
}