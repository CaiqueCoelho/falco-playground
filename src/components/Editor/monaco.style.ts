// SPDX-License-Identifier: Apache-2.0
/*
Copyright (C) 2023 The Falco Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

import styled from "styled-components";

const Editor = styled.div`
  flex: 1 1 55%;
  height: max(45vw, 30rem);
  border: 2.5px solid rgba(5, 5, 5, 0.06);
  border-radius: 5px;
  @media (max-width: 780px) {
  }
`;
export default Editor;
