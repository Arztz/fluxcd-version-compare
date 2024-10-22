import React from 'react'
import Table from './Table'
import { CategoryProps, DataProps } from '@/types'

const TabTable = ({data , index} : {data:DataProps, index:number})  => {
    // function TabTable(data) {
    // console.log(data)
    const {project,category} = data
    // console.log("tabtable: project")
    // console.log(project)
    // console.log(category)
    // console.log('----')
    // console.log(index)
    const sortCategory = category.sort((a, b) => {
        return a.name.localeCompare(b.name); // Sort alphabetically by 'name'
      });
  return (
        <>
            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label={project} defaultChecked={index === 0 ? true : false} />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                <div role="tablist" className="tabs tabs-lifted">
                    {sortCategory?.map((subject:CategoryProps,index: number)=>(
                        <>
                            <input type="radio" name={`tab-${project}`} role="tab" className="tab" aria-label={subject.name} defaultChecked={index === 0 ? true : false}/>                    
                            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                                <Table  service={subject.service} name={subject.name} key={subject.name} />
                            </div>
                        </>
                    ))}
                </div>
            </div>                   
        </>
  )
}

export default TabTable