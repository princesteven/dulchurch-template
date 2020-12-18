import React from 'react'
import { Link } from 'gatsby'
import avatar from '../images/image.jpg'
import Layout from '../components/layout'
import { EditTwoTone } from "@ant-design/icons"
import { Card, Tabs, Col, Tooltip,  Descriptions } from "antd"

const { TabPane } = Tabs
const { Item } = Descriptions

const Parishioner = () => {
    return (
        <Layout>
            <div className="md:grid md:grid-cols-3 md:gap-4">
                <div className="border-solid shadow-2xl mb-3 col-span-1">
                    <div className="items-center py-3">
                        <img src={avatar} alt="avatar" className="w-52 h-52 rounded-full mx-auto" />
                    </div>
                    <div className="py-3 px-3">
                        <div className="py-3 border-b-2"><span className="font-semibold">Jina:</span> Ronalds Arnold Schwatzniger</div>
                        <div className="py-3 border-b-2"><span className="font-semibold">Jinsia:</span> Male</div>
                        <div className="py-3 border-b-2"><span className="font-semibold">Mwaka wa Kuzaliwa:</span> July 13, 2008</div>
                        <div className="py-3 border-b-2"><span className="font-semibold">Umri:</span> 12 years</div>
                        <div className="py-3 border-b-2"><span className="font-semibold">Mawasiliano:</span> +4686000827759</div>
                        <div className="py-3 border-b-2"><span className="font-semibold">Mawasiliano ya Dharura:</span> +4686000827759</div>
                        <div className="py-3"><span className="font-semibold">Barua Pepe:</span> koch.alfredo@example.net</div>
                        <div className="flex justify-between py-3">
                            <button className="bg-blue-primary px-3 py-2 text-white rounded">Reset Password</button>
                            <Link to='#'>
                                <Tooltip title="Edit">
                                    <EditTwoTone
                                    style={{ fontSize: "24px" }}
                                    />
                                </Tooltip>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mb-3 col-span-2">
                <Card
            hoverable
            style={{
              width: "100%",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <Tabs>
              <TabPane tab="Taarifa Binafsi" key="1">
                <Descriptions
                  column={{ xxl: 3, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }}
                >
                  <Item label="Makazi">
                    <strong>Ilala</strong>
                  </Item>
                  <Item label="Ukuu">
                    <strong>Baba</strong>
                  </Item>
                  <Item label="Hali ya ndoa">
                    <strong>Nimeoa</strong>
                  </Item>
                  <Item label="Jimbo">
                    <strong>
                      Jimbo Kuu la Dar es Salaam
                    </strong>
                  </Item>
                  <Item label="Parokia">
                    <strong>
                      Mt. Yakobo Mtume
                    </strong>
                  </Item>
                  <Item label="Jumuiya">
                    <strong>
                    Mt. Yakobo Mtume

                    </strong>
                  </Item>
                  <Item label="Kigango">
                    <strong>
                    Mt. Yakobo Mtume

                    </strong>
                  </Item>
                  <Item label="Nafasi Kwenye Mfumo">
                    Muumini
                  </Item>
                  <Item label="Katengenezwa na">
                    <strong>
                      Ronalds Arnold Schwatzniger
                    </strong>
                  </Item>
                </Descriptions>

                <hr />
                <Col span="12">
                  <p className="text-center">Vyama vya kitume</p>
                  <ul>
                    <li>WAWATA</li>
                  </ul>
                </Col>
              </TabPane>
              <TabPane tab="Ripoti ya matoleo" key="2">
                Content of Tab 2
              </TabPane>
              <TabPane tab="Familia" key="3">
                dfb
              </TabPane>
            </Tabs>
          </Card>
                </div>
            </div>
        </Layout>
    )
}

export default Parishioner
