import {permissionsList} from './schemas/fields';
import { ListAccessArgs } from "./types";

//Access Control returns a yes or no
export function isSignedIn({session}: ListAccessArgs) {
    return !!session;
}

const generatedPermissions = Object.fromEntries(
    permissionsList.map((permission) => [
    permission,
    function({session}: ListAccessArgs){
        return !!session?.data.role?.[permission];
    }
]));


//permisionn check if someone meet a criteria - yes or no
export const permissions = {
   ...generatedPermissions,
    
}

//rules based on function
//rules can return boolean -yes or no - or a filter which limits which product they can crud
export const rules = {
    canManageProducts({session}: ListAccessArgs) {
        if(!isSignedIn({session})) {
            return false;
        }
        //do they have the permission of can manage product
        if(permissions.canManageProducts({session})) {
            return true;
        }
        //if not do they own this item?
        return {user: {id: session.itemId}};
    },
    canOrder({session}: ListAccessArgs) {
        if(!isSignedIn({session})) {
            return false;
        }
        //do they have the permission of can manage product
        if(permissions.canManageCart({session})) {
            return true;
        }
        //if not do they own this item?
        return {user: {id: session.itemId}};
    },
    canManageOrderItems({session}: ListAccessArgs) {
        if(!isSignedIn({session})) {
            return false;
        }
        //do they have the permission of can manage product
        if(permissions.canManageCart({session})) {
            return true;
        }
        //if not do they own this item?
        return {order: {user: {id: session.itemId}}};
    },
    canReadProducts({session}: ListAccessArgs) {
        if(!isSignedIn({session})) {
            return false;
        }
        if(permissions.canManageProducts({session})){
            return true; //they can read everything!
        }
        //they should only see available products based on the status field
        return {status: 'AVAILABLE'};
    },
    canManageUsers({session}: ListAccessArgs) {
        if(!isSignedIn({session})) {
            return false;
        }
        //do they have the permission of can manage product
        if(permissions.canManageUsers({session})) {
            return true;
        }
        //only update themselves
        return  {id: session.itemId};
    },
};