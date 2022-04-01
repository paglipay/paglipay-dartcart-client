// import axios from 'axios';
import React, { useState, useEffect, useRef, lazy } from 'react'
import { Col, Row, Container, Image, Form, Button } from "react-bootstrap";
import ProductReview from '../ProductReview'
// import authHeader from "../../authentication/AuthHeader";

import MiscTableOne from '../misc/MiscTableOne';
import MiscTableTwo from '../misc/MiscTableOne';
import ReactIcon from '../misc/ReactIcon';
import ProductPurchaseCard from '../product-purchase-card/ProductPurchaseCard';
import ProductReviewCard from "../product-review-card/ProductReviewCard"
import ProductImages from '../ProductImages';
import ProductReviewDetail from '../ProductReviewDetail';
import ReviewCrousel from '../misc/ReviewCrousel';
import ProductCrousel from '../misc/ProductCrousel';

function ProductReviewLayout() {

    // const components = {
    //     "ProductReviewCard": require('../product-review-card/ProductReviewCard').default,
    //     "ProductImages": require('../ProductImages').default,
    //     "MiscTableOne": require('../misc/MiscTableOne').default,
    //     "MiscTableTwo": require('../misc/MiscTableTwo').default,
    //     "ProductReviewDetail": require('../ProductReviewDetail').default,
    //     "ProductPurchaseCard": require('../product-purchase-card/ProductPurchaseCard').default,
    //     "ReactIcon": require('../misc/ReactIcon').default,
    //     "ReviewCrousel": require('../misc/ReviewCrousel').default,
    //     "ProductCrousel": require('../misc/ProductCrousel').default,
    // };

    const components = {
        "ProductReviewCard": ProductReviewCard,
        "ProductImages": ProductImages,
        "MiscTableOne": MiscTableOne,
        "MiscTableTwo": MiscTableTwo,
        "ProductReviewDetail": ProductReviewDetail,
        "ProductPurchaseCard": ProductPurchaseCard,
        "ReactIcon": ReactIcon,
        "ReviewCrousel": ReviewCrousel,
        "ProductCrousel": ProductCrousel,
    };

    console.log('components: ', components)

    const [jsonData, setJsonData] = useState([
        {
            code: "0",
            componentType: "ProductReviewCard",
            props: {
                title: "zero"
            },
        },
        {
            code: "i",
            componentType: "ProductImages",
            // props: {
            //     title: "one"
            // },
        },
        {
            code: "1",
            componentType: "ProductReviewCard",
            props: {
                title: "Horrible! One star",
                rating: 1
            },
        },
        {
            code: "2",
            componentType: "ProductReviewCard",
            props: {
                title: "Not that good. Two stars",
                rating: 2
            },
        },
        {
            code: "3",
            componentType: "ProductReviewCard",
            props: {
                title: "It's ok. Three stars",
                rating: 3
            },
        },
        {
            code: "4",
            componentType: "ProductReviewCard",
            props: {
                title: "Really like it! Four Stars",
                rating: 4
            },
        },
        {
            code: "5",
            componentType: "ProductReviewCard",
            props: {
                title: "I Love It! Five Stars",
                rating: 5
            },
        },
        {
            code: "t",
            componentType: "MiscTableOne",
            props: {
                title: "T"
            },
        },
        {
            code: "s",
            componentType: "MiscTableTwo",
            props: {
                title: "T"
            },
        },
        {
            code: "p",
            componentType: "ProductPurchaseCard",
            props: {
                title: "FREE devlivery"
            },
        },
        {
            code: "c",
            componentType: "ProductReviewDetail",
            props: {
                title: "FREE devlivery"
            },
        },
        {
            code: "r",
            componentType: "ReactIcon",

        },
        {
            code: "l",
            componentType: "ReviewCrousel",

        },
        {
            code: "k",
            componentType: "ProductCrousel",
            props: {
                cols: [3, 3, 3, 3]
            },
        },
        {
            code: "j",
            componentType: "ProductCrousel",
            props: {
                cols: [4, 4, 4]
            },
        },
        {
            code: "h",
            componentType: "ProductCrousel",
            props: {
                cols: [2, 2, 2, 2, 2, 2]
            },
        }
    ])

    const [dLayoutData, setDLayoutData] = useState([
        {
            title: "Product Reviews",
            fluid: true,
            cols: ["z"],
            featureTypesArry: ['l']
        },
        {
            title: "Stories",
            fluid: false,
            cols: ["4", "4", "4", "4", "4", "4", "4", "4", "4"],
            featureTypesArry: ['i', 'i', 'i', '5', '4', '3', 'c', 'c', 'c']
        },
        {
            title: "Product Reviews",
            fluid: true,
            cols: ["z", "z", "z"],
            featureTypesArry: ['k', 'j']
        },
        {
            title: "Stories",
            fluid: false,
            cols: ["8", "4", "4", "8", "8", "4", "4", "8"],
            featureTypesArry: ['5', 'i', 'i', '5', '5', 'i', 'i', '5']
        },
        {
            title: "Featured Review",
            fluid: false,
            cols: ["z", "4", "5", "3", "4", "5", "3"],
            featureTypesArry: ['i', 's', '5', 'p', 't', '5', 'p']
        },
        {
            title: "Featured Review",
            fluid: false,
            cols: ["4", "5", "3", "4", "5", "3", "4", "5", "3", "4", "5", "3"],
            featureTypesArry: ['i', '5', 'p', 'i', '5', 'p', 'i', '5', 'p', 'i', '5', 'p']
        },
        {
            title: "Featured Review",
            fluid: false,
            cols: ["3", "6", "3", "3", "6", "3", "3", "6", "3", "3", "6", "3"],
            featureTypesArry: ['i', '5', 'p', 'i', '5', 'p', 'i', '5', 'p', 'i', '5', 'p']
        },
        {
            title: "Reviews",
            fluid: false,
            cols: ["4", "5", "3", "4", "5", "3"],
            featureTypesArry: ['i', '5', 'p', 's', 't', 'c']
        },
        {
            title: "Stories",
            fluid: true,
            cols: ["3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3"],
            featureTypesArry: ['i', 'i', 'i', 'i', '5', '4', '3', '2']
        },
        {
            title: "Stories",
            fluid: false,
            cols: ["6", "6", "6", "6", "6", "6"],
            featureTypesArry: ['5', 'i', 'i', '5', '5', 'i', 'i', '5']
        },
        {
            title: "Stories",
            fluid: false,
            cols: ["6", "6", "6", "6", "6", "6"],
            featureTypesArry: ['5', 'r', 'r', '5', '5', 'r', 'r', '5']
        },
        {
            title: "Stories",
            fluid: true,
            cols: ["8", "4", "4", "8", "8", "4", "4", "8"],
            featureTypesArry: ['5', 'i', 'i', '5', '5', 'i', 'i', '5']
        }
    ])

    const layoutRef = useRef()
    const [formData, setFormData] = useState({ layoutSections: "" })
    const [sections, setSections] = useState([
        { title: "", fluid: true, cols: ["z"], featureTypesArry: ['l'] },
    ])
    const [showLayoutControls, setLayoutControls] = useState(false)

    useEffect(() => {
        console.log(showLayoutControls)
        console.log('sections: ', sections)
    }, [sections, showLayoutControls])

    useEffect(() => {
        console.log('jsonData: ', jsonData)

        // axios.get('http://localhost:9005/product-reviews/product/1', {
        //     headers: authHeader()
        // })
        //     .then(res => {
        //         console.log('axios2: ', res.data)
        //         const result = res.data.map((e) => ({
        //             title: "Product Reviews",
        //             fluid: true,
        //             cols: ["3", "6", "3"],
        //             featureTypesArry: ["i", e.id, "p"]
        //         }), []);

        //         console.log('result: ', result)
        //         setDLayoutData([...result, ...dLayoutData])

        //     })
        //     .catch(e => console.log(e))

        // setDLayoutData([...dLayoutData, {
        //     title: "Product Reviews",
        //     fluid: true,
        //     cols: ["z", "z", "z"],
        //     featureTypesArry: ['18', '19']
        // }])
    }, [jsonData])

    useEffect(() => {
        console.log('dLayoutData: ', dLayoutData)
        setSections(dLayoutData)
    }, [dLayoutData])

    useEffect(() => {
        console.log('formData: ', formData)
        setSections(formData.layoutSections.split("").map((e, i) => i < sections.length ? e === "1" ? {
            ...sections[i],
            fluid: true,
            title: sections[i].title,
            cols: sections[i].cols,
            featureTypesArry: sections[i].featureTypesArry
        } :
            {
                ...sections[i],
                fluid: false,
                title: sections[i].title,
                cols: sections[i].cols,
                featureTypesArry: sections[i].featureTypesArry
            } : {
            ...sections[i],
            fluid: false,
            title: "Section",
            cols: ["z", "4", "5", "3"],
            featureTypesArry: ['i', 't', '5', 'p']
        }))
    }, [formData])

    const handleChange = (e) => {
        // e.preventdefault()
        const layoutString = e.target.value;
        console.log(layoutString)
        if (e.target.name === 'layoutSections') {
            setFormData({ ...formData, [e.target.name]: e.target.value })
        } else {
            setLayoutControls(e.target.checked)
        }
    }

    const loadLayouts = () => {
        console.log('loadLayouts')
        console.log('dLayoutData: ', dLayoutData)
        setSections(dLayoutData)
        // setSections(dLayoutData.sections.map(e => { return { title: "", fluid: e.section, cols: e.cols.map(e => e), featureTypesArry: e.featureTypesArry.map(e => e) } }))
    }


    useEffect(() => {
        // loadLayouts()
        setSections(dLayoutData)

    }, [])

    // const seedDb = () => {

    //     const dataDb = require('../misc/data.json')
    //     // console.log(dataDb)
    //     dataDb.map(e => {
    //         console.log(e)
    //         axios.post('http://localhost:9005/create-product-review/product/1', {
    //             "title": e['Product Name'],
    //             "comment": e['Product Description'],
    //             "rating": 4
    //         }, {
    //             headers: authHeader()
    //         })
    //             .then(res => {
    //                 console.log('axios: ', res.data)
    //             })
    //             .catch(e => console.log(e))
    //     })
    // }

    return (
        <>
            <Form.Group id="fg-1" className="mb-3" controlId="formBasicCheckbox">
                {/* <button onClick={() => seedDb()}>Seed DB</button> */}
                <Form.Check type="checkbox" checked={showLayoutControls}
                    onChange={e => handleChange(e)}
                    label="Set Layout" />
            </Form.Group>
            {
                showLayoutControls && <Form>
                    <fieldset >
                        <Form.Group id="fg-2" className="mb-3">
                            {/* <Form.Label htmlFor="disabledTextInput">Layout input</Form.Label> */}

                            {/* <Form.Select name="layoutSections" value={formData.layoutSections} id="disabledTextInput" placeholder="Disabled input" onChange={e => handleChange(e)} >
                                <option value={`000000`}>0</option>
                                <option value={`1111111`}>1</option>
                            </Form.Select> */}
                            <Form.Control name="layoutSections" value={formData.layoutSections} id="disabledTextInput" placeholder="Disabled input" onChange={e => handleChange(e)} />
                        </Form.Group>
                    </fieldset>
                    {/* <Button onClick={loadLayouts}>LoadLayouts</Button> */}
                </Form>
            }
            {sections.map((e, i) => <div key={`div-${i}`}>
                <section key={`prl-sec-${i}`} style={{ backgroundColor: 'whitesmoke', padding: '25px', marginBottom: '25px' }}>
                    <h1 key={`prl-sec-h1-${i}`}>{e.title}</h1>
                </section>
                <ProductReview key={`prl-${i}`} showLayoutControls={showLayoutControls}
                    components={components}
                    jsonData={jsonData}
                    dLayoutData={dLayoutData}
                    cols={e.cols}
                    featureTypesArry={e.featureTypesArry}
                    fluid={e.fluid} />
            </div>)}
        </>
    )
}

export default ProductReviewLayout