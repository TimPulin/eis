import styled from 'styled-components';

export const TableWrapper = styled.div`
  margin-bottom: 80px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  height: 100%;
  overflow-y: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  th {
    position: sticky;
    top: 0;
    z-index: 10;
  }

  tr:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  tbody tr {
    cursor: pointer;
  }

  tbody tr:hover {
    background-color: ${({ theme }) => theme.colors.backgroundAccentShadow};
  }

  th {
    padding-inline: 12px;
    padding-block: 8px;
    background-color: ${({ theme }) => theme.colors.backgroundAccentLight};
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 13px;
    font-weight: 500;
  }

  td {
    font-size: 14px;
  }

  td:not(:last-child) {
    padding-inline: 12px;
  }

  th:not(:first-child),
  td:not(:first-child) {
    text-align: left;
  }

  td:first-child {
    color: ${({ theme }) => theme.colors.textLight};
    text-align: center;
  }

  td:last-child {
    padding-inline: 12px;
    padding-block: 6px;
    width: 40px;
    height: 40px;
    text-align: center;
  }
`;

export const MeterType = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  svg {
    width: 16px;
    height: 16px;
  }
`;
