import type { getDictionary } from "@/utils/getDictionary";
import * as React from "react"

declare module "react" {
    type Translation<P> = P & {
        t: Awaited<ReturnType<typeof getDictionary>>
    }

    export type FCT<P = Translation<{}>> = (props: Translation<P>) => ReactElement;


}
