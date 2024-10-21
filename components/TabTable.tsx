import React from 'react'
import Table from './Table'
import { DataProps } from '@/types'

function TabTable({data , index} : {data:DataProps, index:number}) {
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
                    {sortCategory?.map((subject,index)=>(
                        <>
                            <input type="radio" name={`tab-${project}`} role="tab" className="tab" aria-label={subject.name} defaultChecked={index === 0 ? true : false}/>                    
                            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                                <Table  service={subject.service}/>
                            </div>
                        </>
                    ))}
                </div>
            </div>                   
        </>
  )
}

export default TabTable