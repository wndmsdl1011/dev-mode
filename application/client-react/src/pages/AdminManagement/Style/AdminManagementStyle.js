// src/pages/AdminManagement/Style/AdminManagementStyle.js
import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  font-family: 'Noto Sans KR', sans-serif;
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: #333;
`;

export const TopControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const SearchRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-weight: 600;
`;

export const Select = styled.select`
  padding: 0.4rem 0.6rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  height: 2.4rem;
`;

export const Input = styled.input`
  padding: 0.4rem 0.6rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  height: 2.4rem;
`;

export const Button = styled.button`
  background-color: #5c6bc0;
  color: #fff;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #3f51b5;
  }
`;

export const FilterButtons = styled.div`
  display: flex;
  gap: 0.3rem;
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const ActionButton = styled.button`
  background-color: ${(props) => (props.danger ? "#d32f2f" : "#ffffff")};
  color: ${(props) => (props.danger ? "#ffffff" : "#000")};
  border: 1px solid #e0e0e0;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.danger ? "#c62828" : "#eeeeee")};
  }
`;

export const TableContainer = styled.div`
  overflow-x: auto;
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 700px;

  th,
  td {
    border: 1px solid #e0e0e0;
    padding: 0.6rem 0.8rem;
    text-align: center;
  }

  th {
    background-color: #f5f5f5;
    font-weight: 600;
    color: #333;
  }

  td {
    vertical-align: middle;
  }

  td:nth-child(6) {
    text-align: left;
  }

  .dead {
    color: #d32f2f;
    font-weight: 600;
  }

  .alive {
    color: #388e3c;
    font-weight: 600;
  }
`;

export const Tr = styled.tr`
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const Td = styled.td``;

export const Th = styled.th``;

export const DownloadBtn = styled.button`
  font-size: 0.8rem;
  padding: 0.2rem 0.4rem;
  border: 1px solid #e0e0e0;
  background-color: #ffffff;
  border-radius: 4px;
  margin-left: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #eeeeee;
  }
`;
