import { Box, Button, Divider, TextField } from "@mui/material";
import "./DragDrop.css";
import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import uuid from "uuid/v4";
export function StrictModeDroppable({ children, ...props }) {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <Droppable {...props} droppableId="ITEMS">
      {" "}
      {children}{" "}
    </Droppable>
  );
}
const renderAdditionalInfo = (content) => {
  switch (content) {
    case "User LAN ID":
      return <TextField variant="outlined" placeholder = "starts with"></TextField>;
    default:
      return <TextField variant="outlined" placeholder = "contains"></TextField>;
  }
};
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};
/**
 * Moves an item from one list to another list.
 */
const copy = (source, destination, droppableSource, droppableDestination) => {
  console.log("==> dest", destination);

  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const item = sourceClone[droppableSource.index];

  destClone.splice(droppableDestination.index, 0, { ...item, id: uuid() });
  return destClone;
};

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;
  return result;
};

export const DragDrop = () => {
  const [state, setValue] = useState({ [uuid()]: [] });
  const [order, setOrder] = useState([]);
  const onDragEnd = (result) => {
    const { source, destination } = result;

    console.log("==> result", result);

    // dropped outside the list
    if (!destination) {
      return;
    }

    switch (source.droppableId) {
      case destination.droppableId:
        setValue({
          ...state,
          [destination.droppableId]: reorder(
            state[source.droppableId],
            source.index,
            destination.index
          ),
        });
        break;
      case "ITEMS":
        setValue({
          ...state,
          [destination.droppableId]: copy(
            ITEMS,
            state[destination.droppableId],
            source,
            destination
          ),
        });
        break;
      default:
        const ans = move(
          state[source.droppableId],
          state[destination.droppableId],
          source,
          destination
        );
        setValue({ ...state, ...ans });
        break;
    }
  };

  const ITEMS = [
    {
      id: uuid(),
      content: "User LAN ID",
    },
    {
      id: uuid(),
      content: "LOB",
    },
    {
      id: uuid(),
      content: "Country",
    },
  ];
  console.log("State is ", state);
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box className="container">
        <Droppable droppableId="ITEMS" isDropDisabled={true}>
          {(provided, snapshot) => (
            <Box
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="options"
            >
              {ITEMS.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <>
                      <Box
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="list"
                      >
                        {item.content}
                      </Box>
                      {snapshot.isDragging && (
                        <Box className="list">{item.content}</Box>
                      )}
                    </>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
        <Box className="right">
          {Object.keys(state).map((list, i) => {
            // console.log("==> list", list);
            // console.log("===> val", state[list]);
            return (
              <Droppable key={list} droppableId={list}>
                {(provided, snapshot) => (
                  <>
                  {i > 0 && (<p>{order[i - 1]}</p>)}
                  <Box
                    ref={provided.innerRef}
                    isDraggingOver={snapshot.isDraggingOver}
                    className="dropContainer"
                  >
                    {state[list].length
                      ? state[list].map((item, index) => (
                        <Box className = "mmm">
                        <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <Box style = {{display: 'flex', flexDirection: 'row', gap: '8px'}}>
                                  <Box
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    isDragging={snapshot.isDragging}
                                    className="list"
                                  >
                                    {item.content}
                                  </Box>
                                  <Box>
                                    {renderAdditionalInfo(item.content)}
                                  </Box>
                                </Box>
                              )}
                            </Draggable>
                            
                        </Box>
                            
                          )
                        )
                      : !snapshot.isDraggingOver && <div>Drop items here</div>}
                    {provided.placeholder}
                  </Box>
                  </>
                )}
              </Droppable>
            );
          })}
          <Box className = 'action'>
          <Button
            variant="contained"
            onClick={() => {
              setValue({ ...state, [uuid()]: [] });
              setOrder([...order, "AND"]);
            }}
          >
            AND
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              setValue({ ...state, [uuid()]: [] });
              setOrder([...order, "OR"]);
            }}
          >
            OR
          </Button>
          </Box>
          
        </Box>
      </Box>
    </DragDropContext>
  );
};
