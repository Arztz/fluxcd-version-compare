import { ExecFileSyncOptionsWithBufferEncoding } from "child_process"

export interface DataProps{
    project: string,
    category: CategoryProps[]
}

export interface CategoryProps{
    name: string,
    service: ServiceProps[]
}

export interface ServiceProps {
    name: string,
    nonprod: string,
    uat: string,
    prod: string
  }