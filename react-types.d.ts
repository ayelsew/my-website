import type { getDictionary } from "@/utils/getDictionary";
import * as React from "react"

declare module "react" {
    export interface ProjectAction {
      href: string
      label: string
      icon: string
    }

    export type Translation<P> = P & {
        t: Awaited<ReturnType<typeof getDictionary>>
    }

    export type FCT<P = Translation<{}>> = (props: Translation<P>) => ReactElement;


}
