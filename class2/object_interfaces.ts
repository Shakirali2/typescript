// TypeAliased (Use = )
type ManagerType = {
    name:string,
    subordinates?:number
}

// Interfaces (Don't use = )
interface Manager {
    name:string,
    subordinates?:number
}
// Both are same somehow
