// import { itemService } from '../services/item.service.local.js'
import { itemService } from '../services/item.service'

export function getActionRemoveitem(itemId) {
    return {
        type: 'removeItem',
        itemId
    }
}
export function getActionAdditem(item) {
    return {
        type: 'addItem',
        item
    }
}
export function getActionUpdateitem(item) {
    return {
        type: 'updateItem',
        item
    }
}

export const itemStore = {
    state: {
        items: []
    },
    getters: {
        items({items}) { return items },
    },
    mutations: {
        setItems(state, { items }) {
            state.items = items
        },
        addItem(state, { item }) {
            state.items.push(item)
        },
        updateItem(state, { item }) {
            const idx = state.items.findIndex(c => c._id === item._id)
            state.items.splice(idx, 1, item)
        },
        removeItem(state, { itemId }) {
            state.items = state.items.filter(item => item._id !== itemId)
        },
       
    },
    actions: {
        async addItem(context, { item }) {
            try {
                item = await itemService.save(item)
                context.commit(getActionAdditem(item))
                return item
            } catch (err) {
                console.log('itemStore: Error in additem', err)
                throw err
            }
        },
        async updateItem(context, { item }) {
            try {
                item = await itemService.save(item)
                context.commit(getActionUpdateitem(item))
                return item
            } catch (err) {
                console.log('itemStore: Error in updateitem', err)
                throw err
            }
        },
        async loadItems(context) {
            try {
                const items = await itemService.query()
                context.commit({ type: 'setItems', items })
            } catch (err) {
                console.log('itemStore: Error in loaditems', err)
                throw err
            }
        },
        async removeItem(context, { itemId }) {
            try {
                await itemService.remove(itemId)
                context.commit(getActionRemoveitem(itemId))
            } catch (err) {
                console.log('itemStore: Error in removeitem', err)
                throw err
            }
        },
    }
}