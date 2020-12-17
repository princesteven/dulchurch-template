import React, { useState } from "react"
import moment from 'moment'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import BreadCumb from '../components/breadcrumb'
import { parishioners } from '../components/parishioners'
import {
  Table,
  Tabs,
  Card,
} from 'antd'

const IndexPage = () => {

  const [noTitleKey, setNoTitleKey] = useState('waumini')

  const onTabChange = (key) => {
    setNoTitleKey(key);
  };

  return (
    <Layout>
      <BreadCumb
        title="Waumini"
        subtitle="Waumini wote wa Parokia"
        buttonText="Sajili Muumini"
      />

      <div className="bg-gray-primary p-2 mt-4">
        <h4 className="font-semibold text-lg">Taarifa za Waumini</h4>

        <Card
          style={{ width: '100%' }}
          tabList={tabListNoTitle}
          activeTabKey={noTitleKey}
          onTabChange={key => {
            console.log(key)
            onTabChange(key);
          }}
        >
          {contentListNoTitle[noTitleKey]}
        </Card>

      </div>
    </Layout>
  )
}

export default IndexPage

let forged_elements = [1,2,3,4,5];
const renderFamilies = forged_elements.map(() => 
    <div className="rounded border-solid shadow-xl mb-3">
      <div className="py-4 px-4 border-b-2 items-center">
        <h3 className="text-lg">Prince Malipula Family</h3>
      </div>
      <div className="flex flex-col py-2 px-2">
        <div className="py-3 border-b-2">Eneo : Upanga</div>
        <div className="py-3 border-b-2">Jumuiya : Mt. Theresia</div>
        <div className="py-3 border-b-2">Idadi ya Wanafamilia : 4</div>
        <div className="py-3">Jina la Kichwa cha Familia : Prince Steven Malipula</div>
      </div>
    </div>
  )
  

const tabListNoTitle = [
  {
    key: 'waumini',
    tab: 'Waumini',
  },
  {
    key: 'familia',
    tab: 'Familia',
  },
];

const columns = [
  {
    title: "Jina",
    dataIndex: "full_name",
    sorter: true,
    key: "full_name",
    width: 150,
    render: full_name => <Link to="/parishioner" className="text-blue-primary">{full_name}</Link>
  },
  {
    title: "Jumuiya",
    dataIndex: "catholic_community",
    key: "catholic_community",
    width: 300,
    render: catholic_community => `${catholic_community.name}`,
  },
  {
    title: "Jinsia",
    dataIndex: "gender",
    key: "gender",
    width: 150,
    filters: [
      { text: "Male", value: "male" },
      { text: "Female", value: "female" },
    ],
  },
  {
    title: "Umri",
    dataIndex: "dob",
    sorter: true,
    key: "dob",
    width: 100,
    render: dob => moment().diff(`${dob}`, "years"),
  },
  {
    title: "Hali ya ndoa",
    dataIndex: "marital_status",
    sorter: true,
    key: "marital_status",
    width: 150,
  },
  {
    title: "Mawasiliano",
    dataIndex: "main_contact",
    key: "main_contact",
    width: 100,
    // fixed: "right",
  },
]

const contentListNoTitle = {
  waumini: <Table
    columns={columns}
    rowKey={record => record.id}
    dataSource={parishioners}
    scroll={{ x: 1300, y: 500 }}
  />,
  familia: <div className="md:grid md:grid-cols-4 md:gap-4">
    {renderFamilies}
  </div>,
};
