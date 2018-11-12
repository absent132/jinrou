/**
 * Data of one room.
 * @package
 */
export interface Room {
  /**
   * ID of room.
   */
  id: number;
  /**
   * Name of room.
   */
  name: string;
  /**
   * Maximum number of players.
   */
  number: number;
  /**
   * Current status of room.
   */
  mode: 'waiting' | 'playing' | 'end';
  /**
   * Date of creation.
   */
  made: number;
  /**
   * Room comment.
   */
  comment: string;
  /**
   * Owner of room.
   * Undefined if hidden.
   */
  owner?: {
    userid: string;
    name: string;
  };
  /**
   * blind mode.
   */
  blind: '' | 'hide' | 'complete';
  /**
   * Whether password is needed.
   */
  needpassword?: true;
  /**
   * whether this room has gm.
   */
  gm: boolean;
}
