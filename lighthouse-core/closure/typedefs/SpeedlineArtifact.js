/**
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Typing externs file for speedline results.
 * @externs
 */

/**
 * @struct
 * @record
 */
function SpeedlineFrames() {}

/** @return {number} */
SpeedlineFrames.prototype.getProgress = function() {};

/** @return {number} */
SpeedlineFrames.prototype.getTimeStamp = function() {};

/**
 * @struct
 * @record
 */
function SpeedlineArtifact() {}

/** @type {number} */
SpeedlineArtifact.prototype.first;

/** @type {number} */
SpeedlineArtifact.prototype.complete;

/** @type {number} */
SpeedlineArtifact.prototype.duration;

/** @type {!Array<!SpeedlineFrames>} */
SpeedlineArtifact.prototype.frames;

/** @type {(string|undefined)} */
SpeedlineArtifact.prototype.debugString;

/** @type {number} */
SpeedlineArtifact.prototype.speedIndex;
