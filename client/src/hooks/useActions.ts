import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "redux";
import {allActions} from "../store/root-action";

export const useActions = () => {
    const dispatch = useDispatch();
    return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch])
}