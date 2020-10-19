export const layout = {
    margin(...args) {
        return {
            marginTop: args[0],
            marginRight: args[1],
            marginBottom: args[2],
            marginLeft: args[3]
        }
    },
    padding(...args) {
        return {
            paddingTop: args[0],
            paddingRight: args[1],
            paddingBottom: args[2],
            paddingLeft: args[3]
        }
    },
    border(...args) {
        return {
            borderWidth: args[0],
            borderStyle: args[1],
            borderColor: args[2]
        }
    }
}