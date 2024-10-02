import React from 'react'
import Table from './Table'

function TabTable() {
  return (
    <div className='flex justify-center'>
        <div className="artboard artboard-horizontal phone-3 ">
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" defaultChecked/>
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <Table />
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="Tab 2"
                    />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <Table />
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 3" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <Table />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TabTable