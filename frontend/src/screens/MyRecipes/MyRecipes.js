import React from 'react';
import MainScreen from '../../components/MainScreen';
import { useEffect } from 'react';
import { Accordion, Badge, Button, Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector  } from "react-redux";
import { listRecipes } from '../../actions/recipesActions';
import { deleteRecipeAction } from '../../actions/recipesActions';
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

const MyRecipes = ({ search }) => {

    const dispatch = useDispatch();
    const recipeList = useSelector((state) => state.recipeList);
    const { loading, recipes, error } = recipeList;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const recipeCreate = useSelector((state) => state.recipeCreate);
    const { success: successCreate } = recipeCreate;

    const recipeUpdate = useSelector((state) => state.recipeUpdate);
    const { success: successUpdate } = recipeUpdate;

    const recipeDelete = useSelector((state) => state.recipeDelete);
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = recipeDelete;

    const deleteHandler = (id) => {
        if (window.confirm("Are you sure?")) {
            dispatch(deleteRecipeAction(id));
        }
    };

    console.log(recipes);

    const history = useHistory();

    useEffect(() => {
        dispatch(listRecipes());

        if (!userInfo) {
            history.push("/");
        }
    }, [dispatch, history, userInfo, successCreate, successUpdate, successDelete]);


    return (
        <MainScreen title={`Welcome Back ${userInfo.name}`}>
            <Link to='createrecipe'>
                <Button style={{ marginLeft:10, marginBottom: 6 }} size='lg'>
                    Create New Recipe
                </Button>
            </Link>
            {errorDelete && (
                <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
            )}
            {loadingDelete && <Loading />}
            {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
            {loading && <Loading />}
            {recipes?.reverse().filter(filteredRecipe => (
                filteredRecipe.title.toLowerCase().includes(search.toLowerCase())
            )).map((recipe) => ( // .reverse() is so new recipes show at the top
                <Accordion key={ recipe._id }>
                    <Card style={{ margin: 10 }}>
                        <Card.Header style={{ display: "flex" }}>
                            <span
                                style={{
                                    color: "black",
                                    textDecoration: "none",
                                    flex: 1,
                                    cursor: "pointer",
                                    alignSelf: "center",
                                    fontSize: 18,
                                }}
                            >
                                <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">
                                    {recipe.title}
                                </Accordion.Toggle>
                            </span>
                            <div>
                                <Button href={`/recipe/${recipe._id}`}>Edit</Button>
                                <Button variant="danger" className="mx-2" onClick={()=>deleteHandler(recipe._id)}>Delete</Button>
                            </div>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <h4>
                                    <Badge variant='success' style={{
                                        backgroundColor: "#78c2ad",
                                    }}>
                                        Category - { recipe.category }
                                    </Badge>
                                </h4>
                                <blockquote className="blockquote mb-0">
                                    <p>
                                        { recipe.content }
                                    </p>
                                    <footer className="blockquote-footer">
                                        Created On{" "}
                                        <cite title="Source Title">
                                            {recipe.createdAt.substring(0, 10)}
                                        </cite>
                                    </footer>
                                </blockquote>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            ))}
        </MainScreen>
    );
};

export default MyRecipes;
