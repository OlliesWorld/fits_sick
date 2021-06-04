
import { PAGINATION_QUERY } from "../components/Pagination"

export default function paginationField(){
    return {
        keyArgs: false, //tells apollo we take care of everything
        read(existing = [], { args, cache}){
            // console.log({existing, args, cache})
            const {skip, first } = args

            const data = cache.readQuery({query: PAGINATION_QUERY})
            const count = data?._allProductsMeta?.count
            const page = skip / first + 1
            const pages = Math.ceil(count / first)

            //check if we have existing items
            const items = existing.slice(skip, skip + first).filter((x) => x)

            if(items.length && items.length !== first && page === pages) {
                return items
            }

            if(items.length !== first){
                //no items, go to network to fetch
                return false
            }

            if(items.length){
                return items
            }
            return false; //fallback to network
        },
        merge(existing, incoming,  {args}) {
            const {skip, first} = args
            console.log(`Merged item from network ${incoming.length}`)
            const merged = existing ? existing.slice(0) : []
            for(let i = skip; i < skip + incoming.length; ++i) {
                merged[i] = incoming[i - skip]
            }
            // console.log(merged)
            return merged
        }
    }
}