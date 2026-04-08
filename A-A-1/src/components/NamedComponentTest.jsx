import { NamedComponent1 as Foo,NamedComponent2 as See, NamedComponent3 as Bar} from "./NC"

export default function NamedComponentTest () {
    return (
        <>
            <h1>Named Component Test</h1>
            <Foo.NamedComponent1 />
            <Foo.NamedComponent2 />
            <Foo.NamedComponent3 />
        </>
    )
}